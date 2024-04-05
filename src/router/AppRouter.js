
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from "../component/home/Home";
import { initChecking } from "../actions/auth";

export const AppRouter = () => {

    const started = useSelector(state => state.auth);
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.removeItem('user')
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {

            console.log("Estás usando un dispositivo móvil!!");
        } else {
            console.log("No estás usando un móvil");
        }
    }, [])

    useEffect(() => {
        dispatch(initChecking())
    }, [dispatch])


    if (started.checking === 'checking') {
        return (
            <Navigate to="/home" />
        )
    }
    return (
        <Routes> 
            <>
                <Route path="/" element={< Home />} /> 
                <Route path="/" element={< Home />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </> 
        </Routes>
    )
}
