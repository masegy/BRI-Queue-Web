import React, { Component } from 'react'
import Header from 'parts/Header';
import BookingDetail from 'parts/BookingDetail';
import Footer from 'parts/Footer';

export default class BookingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <BookingDetail />
                <Footer />
            </>
        )
    }
}

