import { useFetchData } from "../hooks/useFetchData";
import moment from "moment";

const LastTenRecords = () => {
  const { datas, loading } = useFetchData();
  const { data } = datas;

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map(({ concept, amount, date, type, recordId }) => (
          <div key={recordId} className="container card mb-2">
            <h5>concept: {concept}</h5>
            <h5>amount: {amount}</h5>
            <h5>date: {moment(date).format("Do MMM YY")}</h5>
            <h5>type: {type}</h5>
          </div>
        ))
      )}
    </>
  );
};

export default LastTenRecords;
