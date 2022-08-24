import React from "react";

export default class orderedListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;

    return (
      <>
        <ul className="items-list">
          {list.length > 0
            ? list.map((item, index) => {
                return (
                  <li key={`${index}-${item}`} class="items-list">
                    {item}
                  </li>
                );
              })
            : []}
        </ul>
      </>
    );
  }
}
