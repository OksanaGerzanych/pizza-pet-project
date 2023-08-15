
import ContentLoader from "react-content-loader"

const SceletonLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={312}
    height={487}
    viewBox="0 0 312 487"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="84" y="142" rx="0" ry="0" width="2" height="0" /> 
    <rect x="5" y="298" rx="0" ry="0" width="280" height="85" /> 
    <rect x="5" y="258" rx="0" ry="0" width="280" height="30" /> 
    <rect x="5" y="403" rx="0" ry="0" width="110" height="28" /> 
    <rect x="135" y="396" rx="0" ry="0" width="150" height="44" /> 
    <circle cx="145" cy="118" r="118" />
  </ContentLoader>
)

export default SceletonLoader

