import React from 'react'
import './Home.css'
import Nav from '../../Nav/Nav'
import Card from './Cards/Card'

const Home = () => {
  return (
    <div className='h-body'>
      <div className="container home-container">
        <div className="emp-id">
            <h3>Id</h3>
        </div>
        <div className="emp-name">
            <h3>Name</h3>
        </div>
        <div>
          <h3>Options</h3>
        </div>
        
      </div>
      
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Home
