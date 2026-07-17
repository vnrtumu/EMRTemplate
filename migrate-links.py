import os
import re
import glob

BASE_DIR = '/Users/venkatreddy/Desktop/dreams-emr-react/src'

def find_jsx_files():
    files = []
    for root_dir in ['pages', 'components']:
        full_dir = os.path.join(BASE_DIR, root_dir)
        for dirpath, _, filenames in os.walk(full_dir):
            for fn in filenames:
                if fn.endswith('.jsx'):
                    files.append(os.path.join(dirpath, fn))
    return sorted(files)

def has_link_import(content):
    return bool(re.search(
        r"import\s*\{[^}]*\bLink\b[^}]*\}\s*from\s*['\"]react-router-dom['\"]",
        content
    ))

def add_import_statement(content):
    import_stmt = "import { Link } from 'react-router-dom';\n"
    # Find the last import line
    matches = list(re.finditer(r'^import\s+.*?[\n;]', content, re.MULTILINE))
    if matches:
        last = matches[-1]
        pos = last.end()
        # If the import ends with a newline, insert after it
        if pos < len(content) and content[pos-1] == '\n':
            return content[:pos] + import_stmt + content[pos:]
        else:
            return content[:pos] + '\n' + import_stmt + content[pos:]
    else:
        return import_stmt + content

def has_convertible_links(content):
    return bool(re.findall(
        r'<a\b[^>]*?href="/[^#"\'>\s]',
        content
    ) or re.findall(
        r'<a\b[^>]*?href="/"\s',
        content
    ))

def convert_file(content):
    if not has_convertible_links(content):
        return None

    result = content
    changes_made = False

    # Pattern to match the entire <a ...>...</a> structure (non-nested)
    # Use re.DOTALL so . matches newlines
    a_tag_pattern = r'(<a\b)([^>]*?)href="(/[^"]*)"([^>]*>)(.*?)(</a>)'

    def replacer(m):
        nonlocal changes_made
        prefix = m.group(1)   # <a
        attrs_before = m.group(2)  # attributes before href
        href_val = m.group(3)     # href value
        attrs_after = m.group(4)  # > and attributes after href
        inner = m.group(5)        # content between tags
        closing = m.group(6)      # </a>

        # Check if this is an internal route
        # Internal: starts with / and next char is NOT # and doesn't contain http, javascript, mailto, tel
        if href_val.startswith('/#'):
            return m.group(0)
        if href_val.startswith('//'):
            return m.group(0)
        if 'http:' in href_val or 'https:' in href_val:
            return m.group(0)
        if 'javascript:' in href_val:
            return m.group(0)
        if 'mailto:' in href_val:
            return m.group(0)
        if 'tel:' in href_val:
            return m.group(0)
        if href_val.startswith('/') or href_val == '/':
            changes_made = True
            return f'<Link{attrs_before}to="{href_val}"{attrs_after}{inner}</Link>'
        return m.group(0)

    result = re.sub(a_tag_pattern, replacer, result, flags=re.DOTALL)

    if not changes_made:
        return None

    if not has_link_import(result):
        result = add_import_statement(result)

    return result

def main():
    files = find_jsx_files()
    modified_count = 0
    total_links_converted = 0

    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as f:
            original = f.read()

        # Quick check: skip if no <a href="/ at all
        if '/"' not in original:
            continue

        new_content = convert_file(original)
        if new_content is not None and new_content != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            # Count conversions
            before_count = original.count('<a') 
            after_count = new_content.count('<Link')
            converted = after_count
            total_links_converted += converted
            modified_count += 1
            rel_path = os.path.relpath(fpath, BASE_DIR)
            print(f"  {rel_path}: {converted} <a> -> <Link>")

    print(f"\nTotal files modified: {modified_count}")
    print(f"Total links converted: {total_links_converted}")

if __name__ == '__main__':
    main()
