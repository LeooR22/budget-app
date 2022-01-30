export const getData = async (type) => {
  const url = `http://localhost:8080/api/records/`;

  //usar en la query
  console.log(type);
  //

  const resp = await fetch(url);
  const data = await resp.json();

  const datas = data.map((data) => {
    return {
      id: data.id,
      concept: data.concept,
      amount: data.amount,
      date: data.date,
      type: data.type,
    };
  });

  return datas;
};
