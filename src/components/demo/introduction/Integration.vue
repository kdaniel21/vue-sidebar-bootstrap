<template>
  <div id="integration">
    <h3>Integration with a Navbar</h3>
    <p>
      Integrating with the navigation bar seemed to be the biggest issue for me,
      eventuallly this is probably the reason you're looking for something other
      than the default <span class="font-weight-bold">&lt;b-sidebar&gt;</span>.
    </p>
    <h5>Under the Hood</h5>
    <p>
      The solution is quite hacky, since it stores an
      <span class="font-italic">isMobile</span> and a
      <span class="font-italic">sidebarOpen</span> variable, those controll a
      CSS class which adds margin to free up some space for the sidebar. I'm
      eagerly looking forward to improve this solution, yet, so far I haven't
      discovered anything that would overcome the one the package using.
    </p>
    <h5>The Layout Component</h5>
    <p>
      There is also a
      <span class="font-weight-bold">&lt;vsb-layout /&gt;</span> component
      available that initializes a layout similar to what this demo site has. It
      creates a sidebar, a navbar (that is customizable through the
      <span class="font-weight-bold">navbar-content</span> slot and the
      <span class="font-weight-bold">navbar-class</span> prop) and a fluid
      <span class="font-italic">b-container</span> with a
      <span class="font-italic">router-view</span> (which is available through
      the <span class="font-weight-bold">default</span> slot).
    </p>
    <p class="font-weight-bold">
      Of course you can pass any prop to the layout component that you would to
      the sidebar, they are going to be applied.
    </p>
    <pre v-pre>
&lt;vsb-layout navbar-class="bg-primary" :items="navItems" width="250px" shadow&gt;
  &lt;template v-slot:navbar-content&gt;
  ...YOUR NAVBAR CONTENT...
  &lt;/template&gt;

  &lt;template v-slot:default&gt;
  ...CONTENT OF YOUR PAGE...
  &lt;/template&gt;
&lt;/layout&gt;</pre
    >
  </div>
</template>

<script>
export default {
  name: 'Integration'
};
</script>

<style></style>
