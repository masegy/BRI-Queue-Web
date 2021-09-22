import React, { Component } from 'react'
import Header from 'parts/Header';
import BankFormDetail from 'parts/BankFormDetail'
import Footer from 'parts/Footer';

export default class DaftarBank extends Component {
    componentDidMount(){
        window.title = "BRIQueue | Beranda";
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <BankFormDetail />
                <Footer />
            </>
        )
    }
}

