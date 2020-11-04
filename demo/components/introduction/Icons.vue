<template>
  <div id="icons">
    <h3>Icons</h3>
    <p>
      Pay attention that the icons are using by default the
      <span class="font-weight-bold">&lt;b-icon&gt;</span> component provided by
      Bootstrap Vue. However you can use your own icons by specifying the
      <span class="font-italic">
        tag and attributes (where you can specify any HTML attribute key-value
        pairs)
      </span>
      properties.
    </p>
    <h5>Basic Usage</h5>
    <pre v-pre>
      {
        ...
        children: [
              { text: 'Foo', link: '/foo', <span class="font-weight-bold">icon: 'alarm'</span> },
              ...
            ]
      }</pre>
    <h5>Using other icon libraries than the Bootstrap default</h5>
    <pre v-pre>
      {
        ...
        children: [
          { text: 'Foo', link: '/foo', <span class="font-weight-bold">icon: {
              tag: 'fa',
              attributes: { icon: 'foobar'}
            }</span>
          }
        ]
      }
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Icons'
};
</script>

<style></style>
