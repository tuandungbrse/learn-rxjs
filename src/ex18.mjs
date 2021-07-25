export default function ex18() {
  var boxarts = [
    {
      width: 200,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg'
    },
    {
      width: 150,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
    },
    {
      width: 300,
      height: 200,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg'
    },
    {
      width: 425,
      height: 150,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg'
    }
  ]

  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts
    .reduce((acc, cur) =>
      acc.height * acc.width > cur.width * cur.height ? acc : cur
    )
    .map(boxart => boxart.url)
}
