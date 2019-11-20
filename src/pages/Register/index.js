import React, { useState } from 'react';
import './style.css';
import getColor from './getColor';
import getColorBlack from './getColorBlack';

// navigation: history
export default function Register() {
    var [ email, setEmail ] = useState('');
    var corpo = document.querySelector("#corpo");
    function trocarColor() {
        var colorBlack = getColorBlack();
        var color = getColor();
        var menu = document.querySelector("#menuCadastro");
        var email = document.querySelector("#inputEmail");
        email.style.boxShadow = "0px 3px 0px #"+color;
        menu.style.border = "4px solid #"+colorBlack;
    }
    corpo.onload = function() {
        setInterval(() => {
            trocarColor();
        }, 1500)
    }
    function activeSubmit(event) {
        event.preventDefault();
        if(!email || email === '') return alert("Digite algum email se registrar.");
        alert(email);
    }
    return (
        <div id="blockCorp">
            <div id="menuCadastro">
                <p id="cadastroTitle">
                    Acessar conteúdo
                </p>
                <form onSubmit={activeSubmit} id="formularioCadastro">
                    <p id="textEmail">Email <strong className="importante">*</strong>:</p>
                    <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Digite seu melhor email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button
                        type="submit"
                        id="inputBotton"
                    >
                        Acessar
                    </button>
                </form>
            </div>
        </div>
    );
}