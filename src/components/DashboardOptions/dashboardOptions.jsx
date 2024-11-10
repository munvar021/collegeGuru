import {OtherOptions, OptionTitle, OptionsList, OptionItem} from "./styledCompnents"
import {optionsData} from "./data"

const DashboardOptions = () => {
    return(
        <OtherOptions>
            <OptionTitle>Looking for something else?</OptionTitle>
            <OptionsList>
            {optionsData.map((option, index) => (
                <OptionItem key={index} href={option.href}>
                <option.icon size={20} />
                {option.title}
                </OptionItem>
            ))}
            </OptionsList>
        </OtherOptions>
    )
}

export default DashboardOptions