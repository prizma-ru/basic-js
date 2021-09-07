let members = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]
  console.log(members.map(str => typeof str === "string" ? str.trim()[0].toLocaleUpperCase().match(/[A-Z]/g, "") : "").sort().join("") );