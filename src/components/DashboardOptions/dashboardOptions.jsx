import {
  OtherOptions,
  OptionTitle,
  OptionsList,
  OptionItem,
  OptionContent,
} from "./styledCompnents";
import { optionsData } from "./data";

const DashboardOptions = () => {
  return (
    <OtherOptions>
      <OptionTitle>Looking for something else?</OptionTitle>
      <OptionsList>
        {optionsData.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => option.onClick?.()}
            type="button"
          >
            <option.icon size={20} />
            <OptionContent>{option.title}</OptionContent>
          </OptionItem>
        ))}
      </OptionsList>
    </OtherOptions>
  );
};

export default DashboardOptions;
