// import Balance from "../components/Balance";

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <h3 className="card">Balance:</h3>
//       <Balance />
//     </div>
//   );
// };

// export default Home;
import LastTenRecords from "../components/LastTenRecords";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:3002/records/balance"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Home</h1>

      {data.map((item) => (
        <h4 key={"item.id"} className="card p-3">
          balance: {item.balance}
        </h4>
      ))}

      <h2>Last ten records</h2>
      <LastTenRecords />
    </div>
  );
};

export default Blog;
