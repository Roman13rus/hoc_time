import DateTime from "./Datetime"
import DateTimePretty from "./DateTimePretty";


export default function Video(props) {
    const NewTimeFormatDate = DateTimePretty(DateTime)
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <NewTimeFormatDate date={props.date} />
        </div>
    )
}