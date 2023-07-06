# Reader of publications

Create a post reader to view content with the ability to navigate to
next or previous publication, as well as displaying progress.

![reader preview](./preview.gif)

The application must create a DOM element with the following structure.

```html
<!-- Markup of the <Reader> component -->
<div>
   <!-- <Controls> component markup -->
   <section>
     <button type="button">Back</button>
     <button type="button">Forward</button>
   </section>

   <!-- <Progress> component markup -->
   <p>1/10</p>

   <!-- Markup of the <Publication> component -->
   <article>
     <h2>Lorem ipsum dolor sit amet</h2>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
       molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
       quibusdam esse libero est eius, repellendus unde nihil, sequi voluptate
       eaque officiis aliquam impedit laborum adipisci cumque sit.
     </p>
   </article>
</div>
```

## Step 1

In the current step, create a `<Reader items={}>` component with a button section for
publication index changes in state and progress display block. State
stored in the parent component must be of the following form,
you can't add new properties.

```bash
state = {
   publicationIndex: 0
}
```

The publications to be passed to the `items` prop of the `<Reader>` component are stored in the file
[publications.json](./publications.json). After completing this step,
the application should look something like this.

![reader preview](./step-1.gif)

## Step 2

Add a display of the current publication from the `items` prop of the `<Reader>` component. IN
when it is necessary to show only one specific element of the collection, in
React doesn't need to render the markup of the entire collection at once and only show one
desired element hiding all others. Instead, you only need to render
the element that needs to be shown at the moment. For this, in the method
`render()` get and render the markup of the desired post using an array of
prop `items` and the current index of the publication from the state. So when changing
index in the state, only the required publication will be rendered each time.

```js
// Get the publication object in the render() method of the <Reader> component
const publication = this.props.items[this.state.publicationIndex];
```

After completing this step, the application should look like this.

![reader preview](./step-2.gif)

## Step 3

If your application is implemented in a single `<Reader>` component, run
refactoring by separating the appropriate parts into separate components.

It suffices to highlight three components.

- `<Controls onPrevClick={} onNextClick={}>` - paging buttons section
   publications.
- `<Progress currentPage={} totalPages={}>` - progress display block.
- `<Publication title={} text={}>` - an article with one publication markup.

After refactoring, the root `<Reader>` component will look like this.

```html
<>
   <Controls ... />
   <progress ... />
   <Publication ... />
</>
```

## Step 4

Prevent the user from scrolling through publications beyond the boundary values by doing
scroll buttons are not active (disabled attribute) at the time of reaching
the corresponding border. That is, less than `1` and more than the total number of publications
in the `items` prop of the `<Reader>` component. To do this, pass to the component
`<Controls>` two more props `prevBtnDisabled={}` and `nextBtnDisabled={}`. Values
for props, compute in the `render()` method of the `<Reader>` component.

![reader preview](./step-4.gif)

## Usage example

```js
import publications from 'path/to/publications.json';

ReactDOM.render(
   <Reader items={publications} />,
   document.getElementById('root')
);
```
