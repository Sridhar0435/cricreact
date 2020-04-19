import React, { Component } from "react";
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList as List } from "react-window";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import 'react-virtualized/styles.css'
import { connect } from "react-redux";
import { commentaryAction } from "../../actions/matchDetailAction";

const itemsArray = [
    { name: "Drake" },
    { name: "Halsey" },
    { name: "Camillo Cabello" },
    { name: "Travis Scott" },
    { name: "Bazzi" },
    { name: "Flume" },
    { name: "Nicki Minaj" },
    { name: "Kodak Black" },
    { name: "Tyga" },
    { name: "Buno Mars" },
    { name: "Drake" },
    { name: "Halsey" },
    { name: "Camillo Cabello" },
    { name: "Lil Wayne" }
]; // our data



class ShowMoreTest extends Component {
    render() {
        const Row = ({ index, style }) => (
            <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
                {itemsArray[index].name}
            </div>

        );
        var stateCommentary = this.props.commFromState;
        console.log("hello")
        console.log(stateCommentary)

        var height = 450
        return (
            <div>
                <List
                    className="List"
                    height={height}
                    itemCount={itemsArray.length}
                    itemSize={35}
                    width={300}
                >
                    {Row}
                </List>
            </div>
        )
    }

};
const mapStateToProps = (state) => {
    return {
        commFromState: state.matchDetail.commentary
    }
}

export default connect(mapStateToProps)(ShowMoreTest);
// export default ShowMoreTest;