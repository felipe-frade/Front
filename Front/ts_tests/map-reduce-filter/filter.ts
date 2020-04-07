  let data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  let map = data.map((animal) => {
    return 'name:' + animal.name;
  })

  console.log('map: ' , map)

  let dogs = data.filter((animal) => {
    return animal.type === 'dog';
  })

  console.log('filter: ' , dogs)

  let soma = data.reduce((sum, animal)=>{
    return sum + animal.age
  }, 0)

  console.log('reduce: ' + soma)
