import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader_container">
      <Puff
        height="150"
        width="150"
        radius={1}
        color="#2f81f7"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
