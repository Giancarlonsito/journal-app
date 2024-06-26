export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString()
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque itaque impedit sed delectus quos assumenda dignissimos animi, debitis corporis nobis autem culpa laborum aliquid cumque pariatur blanditiis deleniti at qui!',
      picture: null,
    },
    {
      id: new Date().getTime(),
      date: new Date().toDateString() + 1000
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum, et facere maxime eos consectetur dolore dicta culpa incidunt iure, facilis autem officia rerum ipsum. Eius quibusdam iste non fuga.',
      picture: null,
    },
    {
      id: new Date().getTime(),
      date: new Date().toDateString() + 2000
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum, et facere maxime eos consectetur dolore dicta culpa incidunt iure, facilis autem officia rerum ipsum. Eius quibusdam iste non fuga.',
      picture: null,
    }
  ]
})
