import Star from "./Start";

export function Stars({ count }) {
  count = typeof count === 'number' && count <= 5 && count >= 1 ? count : 0
  const star = [...Array(count).keys()].map(i => i+1)
  return (
    star.map(i => < Star key={i} />)
  )
}
