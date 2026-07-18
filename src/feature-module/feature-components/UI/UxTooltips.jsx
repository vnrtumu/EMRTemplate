import PageHeader from '../../components/Common/PageHeader';

const UxTooltips = () => {
  return (
    <div className="page-content">
      <PageHeader title="Tooltips" breadcrumb={[{ label: 'Base UI', link: '#/' }, { label: 'Tooltips', active: true }]} />

      <div className="row">
        <div className="col-xl-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Tooltips on links</h5>
            </div>
            <div className="card-body">
              <p>Hover over the links below to see tooltips.</p>
              <p className="muted mb-0">Placeholder text to demonstrate some <a href="#" className="text-primary" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" className="text-primary" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" className="text-primary" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" className="text-primary" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.</p>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Disabled Elements</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">Elements with the <code>disabled</code> attribute aren{'\u2019'}t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you{'\u2019'}ll want to trigger the tooltip from a wrapper <code>{'<div>'}</code> or <code>{'<span>'}</code>, ideally made keyboard-focusable using <code>tabIndex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
              <div>
                <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
                  <button className="btn btn-primary pe-none" type="button" disabled>Disabled button</button>
                </span>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Hover Elements</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">Elements with the <code>disabled</code> attribute aren{'\u2019'}t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you{'\u2019'}ll want to trigger the tooltip from a wrapper <code>{'<div>'}</code> or <code>{'<span>'}</code>, ideally made keyboard-focusable using <code>tabIndex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
              <button className="btn btn-primary" type="button" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Hover Only, Not a Focus">Hover</button>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Directions</h5>
            </div>
            <div className="card-body">
              <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">Tooltip on top</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">Tooltip on bottom</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">Tooltip on left</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">Tooltip on right</button>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">HTML Tags</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">And with custom HTML added:</p>
              <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                Tooltip with HTML
              </button>
              <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-html="true" data-bs-placement="bottom" title="" data-bs-original-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                Click Me
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Color Tooltips</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">We set a custom class with ex. <code>data-bs-custom-class="primary-tooltip"</code> to scope our background-color primary appearance and use it to override a local CSS variable.</p>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-trigger="click" data-bs-placement="top" data-bs-custom-class="tooltip-primary" data-bs-title="This top tooltip is themed via CSS variables.">Primary tooltip</button>
                <button type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-danger" data-bs-title="This top tooltip is themed via CSS variables.">Danger tooltip</button>
                <button type="button" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-info" data-bs-title="This top tooltip is themed via CSS variables.">Info tooltip</button>
                <button type="button" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-success" data-bs-title="This top tooltip is themed via CSS variables.">Success tooltip</button>
                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-secondary" data-bs-title="This top tooltip is themed via CSS variables.">Secondary tooltip</button>
                <button type="button" className="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-warning" data-bs-title="This top tooltip is themed via CSS variables.">Warning tooltip</button>
                <button type="button" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="tooltip-dark" data-bs-title="This top tooltip is themed via CSS variables.">Dark tooltip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UxTooltips;
