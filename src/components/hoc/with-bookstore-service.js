import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

// const {
//     Consumer : BookstoreServiceConsumer
// } = React.createContext();

const withBookstoreService = () => Wrapped => {
  return props => {
    return (
      <BookstoreServiceConsumer>
        {bookstoreService => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
