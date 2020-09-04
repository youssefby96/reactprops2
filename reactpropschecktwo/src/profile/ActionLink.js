import React from "react";
import Button from "@material-ui/core/Button";

function ActionLink(props) {
return (
    <Button
    variant="outlined"
    color="secondary"
    onClick={() => props.handleNamee(props.name)}> Show me the name </Button>
);
}
export default ActionLink;
