import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part 
            name={props.part1[0]}
            number={props.part1[1]} />
            <Part 
            name={props.part2[0]}
            number={props.part2[1]} />
            <Part 
            name={props.part3[0]}
            number={props.part3[1]} />
        </div>
    )
}

export default Content;