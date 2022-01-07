import MyPartyList from "../MyPartyList/MyPartyList"
import MyPartyListItem from "../MyPartyList/MyPartyListItem"

const MyParty = () => {
  return (
    <>
      <h3 className="m-4 fw-bold">나의 파티</h3>
      {/* My Party List */}
      <MyPartyList className="mt-3" defaultActiveKey="#link1">
        <MyPartyListItem action href="#link1" name="파티이름" content="내용" date={new Date()} />
        <MyPartyListItem action href="#link2" disabled name="파티이름" content="내용" date={new Date()} />
        <MyPartyListItem action name="파티이름" content="내용" date={new Date()} bubblecount={28} />
      </MyPartyList>
    </>
  )
}

export default MyParty
