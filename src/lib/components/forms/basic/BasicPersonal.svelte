<script lang="ts">
    //@ts-nocheck
    import { basicData } from "$lib/store/firstTimeApplicationData";
    import TextInput from "../input/TextInput.svelte";
    import EmailWithConfirmation from "../input/EmailWithConfirmation.svelte";
    import RadioInput from "../input/RadioInput.svelte";
    import ImageSelect from "../input/ImageSelect.svelte";

    let basicPersonalKeys = Object.keys($basicData.personal.data);
    let campusIsValid = false;

    $: if ($basicData.personal.data.campus === "") {
        campusIsValid = false;
    } else {
        campusIsValid = true;
    }
</script>

<div>
    {#each basicPersonalKeys as key}
        {#if $basicData.personal.data[key].inputType === "image-select"}
            <ImageSelect bind:data={$basicData.personal.data[key]} />
        {/if}
        {#if $basicData.personal.data[key].inputType === "text"}
            <TextInput bind:data={$basicData.personal.data[key]} />
        {/if}
        {#if $basicData.personal.data[key].inputType === "radio"}
            <RadioInput bind:data={$basicData.personal.data[key]} />
        {/if}
        {#if $basicData.personal.data[key].inputType === "double-text"}
            <EmailWithConfirmation bind:data={$basicData.personal.data[key]} />
        {/if}
        <hr />
    {/each}
</div>
