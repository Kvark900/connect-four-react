import React, {useContext, useEffect, useState} from "react";
import Card from "reactstrap/es/Card";
import CardHeader from "reactstrap/es/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import Firebase from "../../config/fbConfig";
import {Table} from "reactstrap";
import {GameContext} from "../../App";

export default function HighScore() {
  let { rankings, updateRankings } = useContext(GameContext);

  useEffect(() => {
        console.log("high score useEffect");
        getRankings().then(
            value => updateRankings(value)
        );
      }
  , []);

  const listItems =  rankings.map((user, i) => <tr>
    <td> {i + 1}</td>
    <td>{user.user}</td>
    <td>{user.score}</td>
  </tr>);

  async function getRankings() {
    let fb = Firebase.getInstance();
    const snap = await fb.db.collection("rankings").get();
    return snap.docs.map(doc => doc.data());
  }

  return (
      <>
        <Card style={{marginTop: "10px", width: "500px"}}>
          <CardHeader>Rankings</CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </>)
}
