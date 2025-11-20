import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';
import { APP_DASHBOARD_TOP_TRANSACTIONS_COMBO_BOX_OPTIONS } from '../../../dummy';

const TopTransactionsDateComboFilter = () => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(APP_DASHBOARD_TOP_TRANSACTIONS_COMBO_BOX_OPTIONS[0].label);

  const options = APP_DASHBOARD_TOP_TRANSACTIONS_COMBO_BOX_OPTIONS.map((item) => (
    <Combobox.Option value={item.label} key={item.value}>
      {item.label}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          w={200}
        >
          {value || <Input.Placeholder>Select Interval</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default TopTransactionsDateComboFilter