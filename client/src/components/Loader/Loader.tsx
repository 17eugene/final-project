import { ThreeDots } from "react-loader-spinner";

import "../../styles/Loader/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loader;
