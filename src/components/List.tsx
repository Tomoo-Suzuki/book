import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectList } from "_queries/query/selectList.ts";

import { InterfaceList } from "../types/InterfaceList";

interface Props {
  id_series: string;
  item: {
    item: InterfaceList;
  };
  ui: {
    display_style: Number;
  };
}
interface State {}

class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    selectList(this.props.dispatch);
  }
  render() {
    const display_style = this.props.ui.display_style;
    let itemLists;
    try {
      if (Object.keys(this.props.item.item).length > 1) {
        itemLists = <ItemList data={this.props.item.item} />;
      }
    } catch (e) {
      if (this.props.item.item === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookseries | List</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h2 className="ttl_h2">List</h2>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(List);
