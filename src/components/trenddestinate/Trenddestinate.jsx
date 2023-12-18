import "./trenddestinate.css";
import useFetch from "../../hooks/useFetch";

const Trenddestinate = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=hanoi,danang,hochiminh"
  );
    console.log(data);
  return (
    <div className="featuredTrend">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredTrendItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
              alt=""
              className="featuredTrendImg"
            />
            <div className="featuredTrendTitles">
              <h1>Hà Nội</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredTrendItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
              alt=""
              className="featuredTrendImg"
            />
            <div className="featuredTrendTitles">
              <h1>Đà Nẵng</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredTrendItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
              alt=""
              className="featuredTrendImg"
            />
            <div className="featuredTrendTitles">
              <h1>Hồ Chí Minh</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Trenddestinate;
