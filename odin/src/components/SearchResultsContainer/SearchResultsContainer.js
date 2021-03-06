import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ClientListItem from '../client/ClientListItem/ClientListItem'

export const SearchResultsContainer = (props) => {
  const renderSearchResults = () => {
    if (props.results) {
      return props.results.map((result) => {
       return <ClientListItem client={result}></ClientListItem>
      })
    } else {
      // Setting client to an empty array should clear the search bar 
      return this.setState({client:[]})
    }
  }
  return (
    <ul className="collection">
      {renderSearchResults()}
    </ul>
  );
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = state => {
  return {
    results: state.clientSearchResults
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
