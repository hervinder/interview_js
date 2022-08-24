import React from "react";

export const KEYBOARD_CONSTANTS = {
  ENTER: 13,
  RIGHT_CLICK: "rightClick",
  LEFT_CLICK: "leftClick",
};

const { ENTER, RIGHT_CLICK, LEFT_CLICK } = KEYBOARD_CONSTANTS;

const buildStageConfig = (stageList) => {
  const stageConfig = [];

  stageList &&
    stageList.forEach((stage) => {
      stageConfig.push({
        stageName: stage,
        item: [],
      });
    });

  return stageConfig;
};

class AssemblyLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stageList: buildStageConfig(props.stages),
      input: "",
    };
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleMouseDownEvent = this.handleMouseDownEvent.bind(this);
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

      this.addItemToStage(input, 0);
    }
  }

  /**
   * handle mouse click event when user click item from stage
   * @param addItem : string
   * @param stageIndex : Index
   * @param mouseClicked : string (left lick or right click)
   */
  addItemToStage(addItem, stageIndex, mouseClicked) {
    const { input, stageList } = this.state;
    const stageItemIndex = stageList[stageIndex]["item"];
    let newList = [];
    if (mouseClicked === RIGHT_CLICK) {
      newList = [...stageItemIndex, addItem];
    } else {
      newList = [addItem, ...stageItemIndex];
    }

    stageList[stageIndex]["item"] = newList;
    this.setState({
      stageList: stageList,
      input: "",
    });
  }

  /**
   * delete item from stage
   * @param remove : string
   * @param stageIndex : Index
   */
  deleteItemFromStage(removeItem, stageIndex) {
    const { stageList } = this.state;
    const stageItemIndex = stageList[stageIndex]["item"];
    const removeItemIndex = stageItemIndex.indexOf(removeItem);
    if (removeItemIndex > -1) {
      stageItemIndex.splice(removeItemIndex, 1);
    }
    stageList[stageIndex]["item"] = stageItemIndex;
    this.setState({
      stageList: stageList,
    });
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
   * handle mouse click event when user click item from stage
   * @param mouseClick : string (left lick or right click)
   * @param stageIndex : Index
   * @param itemClicked : string
   */
  handleMouseDownEvent(mouseClick, stageIndex, itemClicked) {
    const { stageList } = this.state;

    if (mouseClick === LEFT_CLICK) {
      if (stageIndex === stageList.length - 1) {
        this.deleteItemFromStage(itemClicked, stageIndex);
      } else {
        this.deleteItemFromStage(itemClicked, stageIndex);
        this.addItemToStage(itemClicked, stageIndex + 1, LEFT_CLICK);
      }
    }

    if (mouseClick === RIGHT_CLICK) {
      if (stageIndex === 0) {
        this.deleteItemFromStage(itemClicked, stageIndex);
      } else {
        this.deleteItemFromStage(itemClicked, stageIndex);
        this.addItemToStage(itemClicked, stageIndex - 1, RIGHT_CLICK);
      }
    }
  }

  render() {
    const {
      state: { input, stageList },
      onInputChange,
      onInputKeyDown,
      handleMouseDownEvent,
    } = this;

    return (
      <>
        <div className="InputWrapper">
          <div className="LabelWrapper">Add an item: </div>
          <input
            className="add-item myInput assembly-add-item"
            autoComplete="off"
            placeholder="Press enter to add item"
            value={input}
            onKeyDown={onInputKeyDown}
            onChange={onInputChange}
          />
        </div>
        <div className="StageWrapper">
          {stageList.map((itemList, stageIndex) => {
            return (
              <div
                className="StageItem assembly-stage"
                data-key={`${itemList.stageName}_${stageIndex}`}
                key={`${itemList.stageName}_${stageIndex}`}
              >
                <div>{itemList.stageName}</div>
                <div>
                  {itemList.item.length > 0 &&
                    itemList.item.map((item, itemIndex) => {
                      return (
                        <div
                          className="ItemButton"
                          key={`${itemList.stageName}_${stageIndex}_${itemIndex}`}
                        >
                          <button
                            className="assembly-item ButtomStyling"
                            onClick={(e) => {
                              handleMouseDownEvent(
                                LEFT_CLICK,
                                stageIndex,
                                item
                              );
                            }}
                            onContextMenu={() => {
                              handleMouseDownEvent(
                                RIGHT_CLICK,
                                stageIndex,
                                item
                              );
                            }}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default AssemblyLine;
