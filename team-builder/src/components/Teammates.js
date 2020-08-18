import React from 'react'

export default function Teammate(props){
    const {details} = props

    if(!details){
        return<h3>fetching your Team&apos;s details...</h3>
    }
    return(
        <div className= 'team container'>
            <h2>{details.username}</h2>
            <p>{details.role}</p>
        </div>
    )
}