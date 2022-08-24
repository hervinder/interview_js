import React from "react";
import OrderedListItem from "./OrderedListItem";
import {
  KEYBOARD_CONSTANTS,
  SORT_DIRECTION,
} from "./../consts/OrderedListConstants";
import { SORT_DIRECTION } from "./../consts/OrderedListConstants";

export const KEYBOARD_CONSTANTS = {
  ENTER: 13,
};

export const SORT_DIRECTION = {
  DESC: "desc",
  ASC: "asc",
};

export const sortList = (sortDirection, listData) => {
  const sortedList = [...listData];

  if (
    sortDirection === SORT_DIRECTION.ASC ||
    sortDirection === SORT_DIRECTION.DESC
  ) {
    sortedList.sort(function (nameA, nameB) {
      if (nameA > nameB) {
        return sortDirection === SORT_DIRECTION.ASC ? 1 : -1;
      }
      if (nameA < nameB) {
        return sortDirection === SORT_DIRECTION.ASC ? -1 : 1;
      }
      return 0;
    });
  }
  return sortedList;
};

export default class OrderedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      listItem: [],
      sortDirection: SORT_DIRECTION.ASC,
    };
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
    this.onClearList = this.onClearList.bind(this);
  }

  /**
   * Set input state on input change
   * @param e
   */
  onInputChange(e) {
    this.setState({
      input: e && e.target.value,
    });
  }

  /**
   * input key down change
   * @param e
   */
  onInputKeyDown(e) {
    const { input } = this.state;
    const { keyCode, target } = e;

    // on enter key  pressed, add new list item
    if (keyCode === ENTER) {
      e.preventDefault();
      if (input === "") {
        return;
      }

      this.addListItem(input);
    }
  }

  /**
   * add list item
   * @param inputValue : string
   */
  addListItem(inputValue) {
    const { listItem } = this.state;
    const newList = [...listItem];
    newList.push(inputValue);
    this.sortOrderList(newList);
    this.setState({ input: "" });
  }

  /**
   * sort the list
   * @param newList :array
   */
  sortOrderList(newList) {
    const { sortDirection } = this.state;
    const sortedList = sortList(sortDirection, newList);
    this.setState({ listItem: sortedList });
  }

  /**
   * on sort direction change
   */
  onSortChange() {
    const {
      state: { sortDirection, listItem },
    } = this;

    const newSortDirection =
      SORT_DIRECTION.ASC === sortDirection
        ? SORT_DIRECTION.DESC
        : SORT_DIRECTION.ASC;

    const sortedList = sortList(newSortDirection, listItem);
    this.setState({
      sortDirection: newSortDirection,
      listItem: sortedList,
    });
  }

  /**
   * on clear list
   */
  onClearList() {
    this.setState({
      input: "",
      listItem: [],
    });
  }

  render() {
    const {
      state: { input, listItem, sortDirection },
      onInputChange,
      onInputKeyDown,
      onSortChange,
      onClearList,
    } = this;

    return (
      <>
        <div className="ListWrapper">
          <input
            className="add-item myInput"
            autocomplete="off"
            placeholder="Press enter to add item"
            value={input}
            onKeyDown={onInputKeyDown}
            onChange={onInputChange}
          />
          <button
            title="sorting"
            className="sort-direction SortButtomStyling"
            onClick={onSortChange}
          >
            {sortDirection === SORT_DIRECTION.ASC ? "⬇️" : "⬆️"}
          </button>
          <button
            title="clear list"
            className="clear-list ClearButtomStyling"
            onClick={onClearList}
          >
            ️CLEAR
          </button>
        </div>
        <div className="OrderList">
          <OrderedListItem list={listItem} />
        </div>
      </>
    );
  }
}
