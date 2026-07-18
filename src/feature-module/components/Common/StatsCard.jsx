const StatsCard = ({ icon, value, label, trend, trendUp = true, bgColor = 'bg-secondary' }) => {
  return (
    <div className="card">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <span className="fw-medium d-block mb-1">{label}</span>
          <h3 className="mb-0">{value}</h3>
          {trend && (
            <span className={`fs-12 fw-medium d-block mt-1 ${trendUp ? 'text-success' : 'text-danger'}`}>
              <i className={`ti ti-trending-${trendUp ? 'up' : 'down'} me-1`}></i>{trend}
            </span>
          )}
        </div>
        <div className={`d-flex align-items-center justify-content-center rounded-circle ${bgColor} bg-opacity-10 p-3`}>
          <i className={`ti ${icon} fs-24 ${bgColor.replace('bg-', 'text-')} `}></i>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
