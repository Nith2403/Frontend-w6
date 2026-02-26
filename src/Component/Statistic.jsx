function Statistic({ courseResults }) {
  if (!courseResults.length) return null;

  const scores = courseResults.map(student => student.score);

  const average =
    scores.reduce((total, score) => total + score, 0) / scores.length;

  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistics">
      <div>
        <p>Average</p>
        <h2>{average.toFixed(0)}</h2>
      </div>

      <div>
        <p>Min</p>
        <h2>{min}</h2>
      </div>

      <div>
        <p>Max</p>
        <h2>{max}</h2>
      </div>
    </div>
  );
}

export default Statistic;
