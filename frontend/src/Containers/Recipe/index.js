import React, { Component } from "react"
import { connect } from "react-redux"
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import { useParams } from "react-router-dom"
import * as actions from "../../actions"
import { bindActionCreators } from "redux"
import LinearProgress from "@material-ui/core/LinearProgress"

const Recipe = (props) => {

    const { recipeToDisplay } = props
    
    let { id } = useParams();

    React.useEffect(() => {
      id && props.searchRecipeById(id)
    }, [id])

    return ( 
      recipeToDisplay ? <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{recipeToDisplay && recipeToDisplay.name}</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Ingredient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipeToDisplay && recipeToDisplay.ingredients.map((ingredient) => (
            <TableRow key={ingredient._id}>
              <TableCell align="right">{ingredient.amount}</TableCell>
              <TableCell align="right">{ingredient.unit}</TableCell>
              <TableCell align="right">{ingredient.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : "Oops cant find the recipe with id: " + id
    )
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipeById: actions.searchRecipeById,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
