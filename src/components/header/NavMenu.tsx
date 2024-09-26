import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ListItem } from './ListItem';

export const NavMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-10 hidden w-full flex-1 items-center justify-center lg:flex">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-white p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Laws & Regulartions{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem href="https://stitches.dev/" title="Law"></ListItem>
              <ListItem href="/colors" title="Royal Decrees"></ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Sub Decrees"></ListItem> 
              <ListItem href="/" title="Circulation"></ListItem>
              <ListItem href="/" title="Prakas"></ListItem>
              <ListItem href="/" title="Decisions"></ListItem>
              <ListItem href="/" title="Guidelines"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Media{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[200px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="News Releases" href="/primitives/docs/overview/introduction"></ListItem>
              <ListItem title="Activities" href="/primitives/docs/overview/introduction"></ListItem>
              <ListItem title="Events" href="/primitives/docs/overview/introduction"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Resources{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem href="https://stitches.dev/" title="Publications"></ListItem>
              <ListItem href="/colors" title="Telecom Statistics"></ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Active Operator"></ListItem> 
              <ListItem href="/" title="Mobile Prefixes"></ListItem>
              <ListItem href="/" title="Common Codes"></ListItem>
              <ListItem href="/" title="Emergency Numbers"></ListItem>
              <ListItem href="/" title="Qualified Import Agents"></ListItem>
              <ListItem href="/" title="Tower Map"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            About{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem href="https://stitches.dev/" title="Chairman's Keynoted"></ListItem>
              <ListItem href="/colors" title="Vision & Mission"></ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="About TRC"></ListItem> 
              <ListItem href="/" title="TRC Leaders"></ListItem>
              <ListItem href="/" title="TRC Structure"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Service{' '}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-cols-[0.75fr_1fr]">
              <ListItem href="https://stitches.dev/" title="Public"></ListItem>
              <ListItem href="/colors" title="Domain .KH"></ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Internet Cafe"></ListItem> 
              <ListItem href="/" title="Telecom Equipment Shop"></ListItem>
              <ListItem href="/" title="Operaor"></ListItem>
              <ListItem href="/" title="Operational License"></ListItem>
              <ListItem href="/" title="Spectrum License"></ListItem>
              <ListItem href="/" title="Telecom Numbering Permit"></ListItem>
              <ListItem href="/" title="Equipment TA Certificate"></ListItem>
              <ListItem href="/" title="Qualified Agent Certification"></ListItem>
              <ListItem href="/" title="Equipment Importation & Distribution Permit"></ListItem>
              <ListItem href="/" title="Tower Construction Permit"></ListItem>
              <ListItem href="/" title="Fiber Cable Construction Permit"></ListItem>
              <ListItem href="/" title="Frequency Interference Complaint"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-primary" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
