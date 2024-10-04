import timeForm from "../servises/timeForm"

export default function DateTimePretty (Component) {
    return function (props) {
        const { date } = props
        console.log(date)
        return <Component date = {timeForm(date)}/>
    }
}
            