<div class="container-fluid">
<form action="">
  <!-- BUTTONS -->
  <div class="card">
    <div class="card-body">
      <div class="container px-4">
        <div class="row gx-5">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="p-3 border bg-light text-center"
              id="calculate"
              type="button"
            >
              Calculate
            </button>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="p-3 border bg-light text-center"
              id="viewReport"
              type="button"
            >
              View Report
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body" id="actualTime">
      <!-- <span
        >You will reach your goal in <span id="actualTime"></span> months.</span>
      </span> -->
      <!-- <span
        >You will need <span id="actualTime"></span> months to reach your goal.</span>
      </span> -->
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      Savings Plan Inputs
      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="savingsInput">Savings goal $: </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input id="savingsInput" value="10000" style="width: 85px" />
        </div>
        <div class="col-sm-8 col-lg-8">
          <output for="savingsInput"></output>

          <datalist id="goalTickmarks">
            <option value="0" label="$0"></option>
            <!-- <option value="125000"></option> -->
            <option value="25000" label="$25k"></option>
            <option value="50000" label="$50k"></option>
            <option value="75000" label="$75k"></option>
            <option value="100000" label="$100k"></option>
          </datalist>
          <input
            id="savingsRange"
            type="range"
            min="0"
            max="100000"
            list="goalTickmarks"
            value="10000"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="yearsInput">Years to save </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input
            id="yearsInput"
            min="0"
            max="100"
            value="10"
            type="number"
            style="width: 85px"
          />
        </div>
        <div class="col-sm-8 col-lg-8">
          <datalist id="yearsTickmarks">
            <option value="1" label="1"></option>
            <option value="34" label="34"></option>
            <option value="67" label="67"></option>
            <option value="100" label="100"></option>
          </datalist>
          <input
            id="yearsRange"
            type="range"
            min="0"
            max="100"
            list="yearsTickmarks"
            value="10"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="currentSavedInput">Current saved </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input
            id="currentSavedInput"
            value="1000"
            type="number"
            style="width: 85px"
          />
        </div>
        <div class="col-sm-8 col-lg-8">
          <datalist id="currentSavedTickmarks">
            <option value="0" label="0"></option>
            <option value="250000" label="2"></option>
            <option value="500000" label="5"></option>
            <option value="750000" label="7"></option>
            <option value="1000000" label="10"></option>
          </datalist>
          <input
            id="currentSavedRange"
            type="range"
            min="0"
            max="1000000"
            list="currentSavedTickmarks"
            value="1000"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="monthlySavingsInput">Monthly Savings $: </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input
            id="monthlySavingsInput"
            value="500"
            type="number"
            style="width: 85px"
          />
        </div>
        <div class="col-sm-8 col-lg-8">
          <datalist id="monthlySavingsTickmarks">
            <option value="0" label="0"></option>
            <option value="250000" label="2"></option>
            <option value="500000" label="5"></option>
            <option value="750000" label="7"></option>
            <option value="1000000" label="10"></option>
          </datalist>
          <input
            id="monthlySavingsRange"
            type="range"
            min="0"
            max="1000000"
            list="monthlySavingsTickmarks"
            value="500"
            style="width: 100%"
          />
        </div>
      </div>

      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="expectedRateInput"
            >Expected Rate of Return %:
          </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input
            id="expectedRateInput"
            value="2"
            type="number"
            style="width: 85px"
          />
        </div>
        <div class="col-sm-8 col-lg-8">
          <datalist id="rateTickmarks">
            <option value="0" label="0"></option>
            <option value="25" label="25"></option>
            <option value="50" label="50"></option>
            <option value="77" label="75"></option>
            <option value="100" label="100"></option>
          </datalist>
          <input
            id="expectedRateRange"
            type="range"
            min="0"
            max="100"
            list="rateTickmarks"
            value="2"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="input-group-text row mb-3">
        <div class="col-2 col-lg-2">
          <!-- the "for on the label puts matching ID into focus" -->
          <label for="expectedInflationInput">
            Expected Rate of Inflation %:
          </label>
        </div>

        <div class="input-amount col-2 col-lg-2">
          <input
            id="expectedInflationInput"
            value="1"
            type="number"
            style="width: 85px"
          />
        </div>
        <div class="col-sm-8 col-lg-8">
          <datalist id="inflationTickmarks">
            <option value="0" label="0"></option>
            <option value="25" label="25"></option>
            <option value="50" label="50"></option>
            <option value="77" label="75"></option>
            <option value="100" label="100"></option>
          </datalist>
          <input
            id="expectedInflationRange"
            type="range"
            min="0"
            max="100"
            list="inflationTickmarks"
            value="1"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</form>
</div>