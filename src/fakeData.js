const getData = (link) => {
  let data = null
  if(link === '/tv'){
    data = {
      data:[
        {imgUrl: "/img/example/channels/img0.svg",
        channelName: "Первый Канал",
        tvProgramm: [
          {time: '13:00', title: 'Новости с субтитрами'},
          {time: '14:00', title: 'Давай поженимся'},
          {time: '15:00', title: 'Другие новости'},
        ]},
        {imgUrl: "/img/example/channels/img1.svg",
        channelName: "2x2",
        tvProgramm: [
          {time: '13:00', title: 'Новости с субтитрами'},
          {time: '14:00', title: 'Давай поженимся'},
          {time: '15:00', title: 'Другие новости'},
        ]},
        {imgUrl: "/img/example/channels/img2.svg",
        channelName: "РБК",
        tvProgramm: [
          {time: '13:00', title: 'Новости с субтитрами'},
          {time: '14:00', title: 'Давай поженимся'},
          {time: '15:00', title: 'Другие новости'},
        ]},
        {imgUrl: "/img/example/channels/img3.svg",
        channelName: "AMEDIA PREMIUM",
        tvProgramm: [
          {time: '13:00', title: 'Новости с субтитрами'},
          {time: '14:00', title: 'Давай поженимся'},
          {time: '15:00', title: 'Другие новости'},
        ]},
        {imgUrl: "/img/example/channels/img2.svg",
        channelName: "Первый Канал",
        tvProgramm: [
          {time: '13:00', title: 'Новости с субтитрами'},
          {time: '14:00', title: 'Давай поженимся'},
          {time: '15:00', title: 'Другие новости'},
        ]},
      ]
    }
  }

  if(link === '/newfilms'){
    data = {
      data:[
        {
          name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
          discription: '',
          imgUrl: 'img/example/newFilms/img0.svg'
        },
        {
          name: 'Новый Бэтмен',
          discription: '',
          imgUrl: 'img/example/newFilms/img1.svg'
        },
        {
          name: 'Однажды... в Голливуде',
          discription: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
          imgUrl: 'img/example/newFilms/img2.svg'
        },
        {
          name: 'Стриптизёрши',
          discription: '',
          imgUrl: 'img/example/newFilms/img3.svg'
        },
      ]
    }
  }

  return JSON.stringify(data)
}

export default getData