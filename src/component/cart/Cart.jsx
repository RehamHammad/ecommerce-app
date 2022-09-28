import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action';
import { useState } from 'react';
import axios from 'axios';


export default function Cart() {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()
    
  return (
    <>
  
    </>
  )
}
