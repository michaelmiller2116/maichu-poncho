import React from 'react'

const Header = () => {

  // const data = { 
  //   image: "https://images.unsplash.com/photo-1525263239620-17d9532f784d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b51c807b863a3938f1b26d814ce0f2ab&auto=format&fit=crop&w=1350&q=80",
  //   name: "You have seen this one before",
  //   description: "Like I said, you have seen it before",
  //   price: 75
  //  };

  // fetch('http://localhost:5000/ponchos', {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data), // data can be `string` or {object}!
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  //   .catch(error => console.error('Error:', error))
  //   .then(response => console.log('Success:', response))


  return (
    <header className='App-header'>
      <img src='assets/Mp_edited.jpg' className='App-logo' alt='logo' />
    </header>
  )
}

export default Header