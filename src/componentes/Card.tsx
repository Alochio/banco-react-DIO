interface Icard {
  id: number
  title: string
  details: string
}

export const Card = ({ id , title, details}: Icard) => {
  return (
    <div>
      <h1>Card {id}</h1>
      <p>{title}</p>
      <p>{details}</p>
    </div>
  );
};
