export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">Start adding items to your packing list</footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percPacked = Math.round((numPacked / numItems) * 100 || 0);

  return (
    <footer className="stats">
      {percPacked === 100
        ? "You got everything, Ready to go ✈️"
        : `You have ${numItems} items in your list, you have already packed
      ${numPacked}(${percPacked}%)`}
    </footer>
  );
}
