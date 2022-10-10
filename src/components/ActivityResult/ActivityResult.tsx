const ActivityResult = ({ data }) => {
  const { participants, type, price, accessibility } = data;
  return (
    <div>
      {participants && <p>{participants}</p>}
      {type && <p>{type}</p>}
      {price && <p>{price}</p>}
      {accessibility && <p>{accessibility}</p>}
    </div>
  );
};

export default ActivityResult;
