const getData = () => (
  new Promise((resolve) => {
    setTimeout(
      () => {
        resolve({
          a: 1,
          b: 2
        })
      },
      1500
    )
  })
)

export default getData;
