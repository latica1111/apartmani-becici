import { Menu } from "@chakra-ui/react"

export default function DropdownButton ({ label, items }){

    return(
        <>
        <Menu.Root>
  <Menu.Trigger />
  <Menu.Positioner>
    <Menu.Content>
     

      <Menu.ItemGroup>
        {items.map((item) => (
          <MenuItem key={item.key} as="a" href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </Menu.ItemGroup>

      <Menu.Separator />
      <Menu.Arrow />

      <Menu.CheckboxItem>
        <Menu.ItemIndicator />
      </Menu.CheckboxItem>

      <Menu.RadioItemGroup>
        <Menu.RadioItem>
          <Menu.ItemIndicator />
        </Menu.RadioItem>
      </Menu.RadioItemGroup>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
        
        </>
    )
}