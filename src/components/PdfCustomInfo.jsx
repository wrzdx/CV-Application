export default function CustomInfoSection({ data }) {
  return (
    data.customInfoTitle?.value && (
      <div className="customInfo-data">
        <h3 style={{ backgroundColor: data.customInfoColor?.value }}>
          {data.customInfoTitle.value}
        </h3>
        <div className="content-wrapper">{data.customInfoDesc?.value}</div>
      </div>
    )
  )
}
